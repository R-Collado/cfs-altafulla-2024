export interface Match {
  rival: string;
  date: string;
  atHome: boolean;
  result?: Result;
}

interface Result {
  goalsFulla: number;
  goalsRival: number;
}

export const matches: Match[] = [
  {
    date: "2024-09-14T19:00:00",
    rival: "El Vendrell",
    atHome: false,
    result: {
      goalsFulla: 2,
      goalsRival: 3,
    },
  },
  {
    date: "2024-09-28T19:30:00",
    rival: "El Morell CFS A",
    atHome: false,
  },
  {
    date: "2024-10-05T19:00:00",
    rival: "Montblanc CFS A",
    atHome: true,
  },
  {
    date: "2024-10-19T19:00:00",
    rival: "CE Puigpelat A",
    atHome: false,
  },
  {
    date: "2024-10-26T19:00:00",
    rival: "Spicy La Lira Vendrellenca FS A",
    atHome: true,
  },
  {
    date: "2024-11-02T19:00:00",
    rival: "Fundació Pef. La Pobla Mafumet A",
    atHome: true,
  },
  {
    date: "2024-11-10T17:00:00",
    rival: "Huracans Transpais Sub-20 B",
    atHome: false,
  },
  {
    date: "2024-11-23T19:00:00",
    rival: "Sarralenc EC A",
    atHome: true,
  },
  {
    date: "2024-12-01T12:15:00",
    rival: "FutsalPax Tarragona CE B",
    atHome: false,
  },
  {
    date: "2024-12-14T19:00:00",
    rival: "CFS El Catllar B",
    atHome: true,
  },
  {
    date: "2025-01-11T16:00:00",
    rival: "Elisabeth Salou-Mediterrani B B",
    atHome: false,
  },
  {
    date: "2025-01-18T19:00:00",
    rival: "Salou CFS B",
    atHome: true,
  },
  {
    date: "2025-01-25T18:00:00",
    rival: "Vila-Rodona CFS B",
    atHome: false,
  },
  {
    date: "2025-02-01T19:00:00",
    rival: "Vila-Seca FS Sub-23 B",
    atHome: true,
  },
  {
    date: "2025-02-08T19:00:00",
    rival: "El Morell CFS A",
    atHome: true,
  },
  {
    date: "2025-02-16T19:00:00",
    rival: "Montblanc CFS A",
    atHome: false,
  },
  {
    date: "2025-02-22T19:00:00",
    rival: "CE Puigpelat A",
    atHome: true,
  },
  {
    date: "2025-03-08T16:30:00",
    rival: "Spicy La Lira Vendrellenca FS A",
    atHome: false,
  },
  {
    date: "2025-03-16T18:00:00",
    rival: "Fundació Pef. La Pobla Mafumet A",
    atHome: false,
  },
  {
    date: "2025-03-22T19:00:00",
    rival: "Huracans Transpais Sub-20 B",
    atHome: true,
  },
  {
    date: "2025-03-29T20:00:00",
    rival: "Sarralenc EC A",
    atHome: false,
  },
  {
    date: "2025-04-05T19:00:00",
    rival: "FutsalPax Tarragona CE B",
    atHome: true,
  },
  {
    date: "2025-04-13T18:00:00",
    rival: "CFS El Catllar B",
    atHome: false,
  },
  {
    date: "2025-04-26T19:00:00",
    rival: "Elisabeth Salou-Mediterrani B B",
    atHome: true,
  },
  {
    date: "2025-05-03T16:00:00",
    rival: "Salou CFS B",
    atHome: false,
  },
  {
    date: "2025-05-10T19:00:00",
    rival: "Vila-Rodona CFS B",
    atHome: true,
  },
  {
    date: "2025-05-17T18:15:00",
    rival: "Vila-Seca FS Sub-23 B",
    atHome: false,
  },
];
