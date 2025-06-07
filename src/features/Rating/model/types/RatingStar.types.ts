export type RatingStarProps = {
  rating: number;
  choices: number;
} & (
  | {
      isEditable: true;
      onChange: (rate: number) => void;
    }
  | {
      isEditable?: false | undefined;
      onChange?: never;
    }
);

export interface Stars {
  order: number;
  filled: boolean;
  byPercent: number;
  text: string;
  isChoice: boolean;
}
