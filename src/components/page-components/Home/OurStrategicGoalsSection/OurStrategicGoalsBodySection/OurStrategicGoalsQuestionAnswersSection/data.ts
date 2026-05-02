export type StrategicGoalDictKey =
  | "firmEnablement"
  | "itConsultancy"
  | "endToEnd"
  | "partnership"
  | "scalability"
  | "operational";

export interface IOurStrategicGoalsQuestionAnswersSectionData {
  id: number;
  /** Translation key into `dict.strategicGoals.items[...]`. */
  dictKey: StrategicGoalDictKey;
}

export const ourStrategicGoalsQuestionAnswersSectionData: IOurStrategicGoalsQuestionAnswersSectionData[] =
  [
    { id: 1, dictKey: "firmEnablement" },
    { id: 2, dictKey: "itConsultancy" },
    { id: 3, dictKey: "endToEnd" },
    { id: 4, dictKey: "partnership" },
    { id: 5, dictKey: "scalability" },
    { id: 6, dictKey: "operational" },
  ];
