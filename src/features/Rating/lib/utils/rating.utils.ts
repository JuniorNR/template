export const percentOfRating = (rating: number): number => {
  return (rating / 5) * 100;
};

export const starByPercent: Record<string, number> = {
  oneStar: 20,
  twoStar: 40,
  threeStar: 60,
  fourStar: 80,
  fiveStar: 100,
};
