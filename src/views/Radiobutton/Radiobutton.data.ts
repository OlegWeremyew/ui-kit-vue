import {FootballClubsType} from "@/views/Radiobutton/types";

export const clubsList: FootballClubsType = [
  {name: 'CSKA Moscow', id: 'f1',},
  {name: 'Spartak Moscow', id: 'f2',},
  {name: 'Real Madrid', id: 'f3',},
  {name: 'Milan', id: 'f4',}
]

export type selectedClubName = 'CSKA Moscow' | 'Spartak Moscow' | 'Real Madrid' | 'Milan' | ''
