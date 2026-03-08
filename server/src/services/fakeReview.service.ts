const spamPhrases = [
  "best coworking ever",
  "must visit",
  "highly highly recommended",
  "100% guaranteed",
  "life changing",
  "perfect in every way"
];

export interface FakeReviewPrediction {
  isFake: boolean;
  confidenceScore: number;
}

export const detectFakeReview = (text: string): FakeReviewPrediction => {
  const normalized = text.trim().toLowerCase();
  let score = 0;

  const exclamations = (text.match(/!/g) || []).length;
  const uppercaseLetters = (text.match(/[A-Z]/g) || []).length;
  const letters = (text.match(/[A-Za-z]/g) || []).length;
  const uppercaseRatio = letters > 0 ? uppercaseLetters / letters : 0;

  if (normalized.length < 15) {
    score += 0.25;
  }

  if (exclamations >= 3) {
    score += 0.25;
  }

  if (uppercaseRatio > 0.45) {
    score += 0.2;
  }

  if (spamPhrases.some((phrase) => normalized.includes(phrase))) {
    score += 0.35;
  }

  if (/\b(very|super|best|amazing)\b(?:\s+\1){1,}/i.test(text)) {
    score += 0.2;
  }

  const confidenceScore = Math.min(0.99, Number(score.toFixed(2)));
  return {
    isFake: confidenceScore >= 0.5,
    confidenceScore
  };
};
