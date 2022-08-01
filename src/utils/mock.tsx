// Define data
export type ChartsData = {
  xy: XYDataSeries;
  hierarchy: HierarchyDataSeries;
}

export type circleItem = {
  name: string;
  value: number;
  type?: string;
}

export type XYDataSeries = {
  Column: XYdata[];
  Line: XYdata[];
  Step: XYdata[];
}

export type HierarchyDataSeries = {
  Packed: any;
}

export type XYdata = {
  [key: string]: number | string;
}
const charts_data: ChartsData =
{
  xy: {
    Column: [
      {
        category: "Research",
        value1: 1000,
        value2: 588,
        value3: 700
      },
      {
        category: "Marketing",
        value1: 1200,
        value2: 1800,
        value3: 688
      },
      {
        category: "Sales",
        value1: 850,
        value2: 1230,
        value3: 100
      },
      {
        category: "Store",
        value1: 300,
        value2: 900,
        value3: 2000
      }
    ],
    Line: [
      {
        "year": "2021",
        "europe": 5,
        "namerica": 2.5,
        "asia": 1
      }, {
        "year": "2022",
        "europe": 2.6,
        "namerica": 6.7,
        "asia": 2.2
      }, {
        "year": "2023",
        "europe": 4.8,
        "namerica": 1.9,
        "asia": 4.4
      }

    ],
    Step: [{
      date: new Date(2021, 0, 1).getTime(),
      value: 1000
    }, {
      date: new Date(2021, 0, 2).getTime(),
      value: 800
    }, {
      date: new Date(2021, 0, 3).getTime(),
      value: 499
    }, {
      date: new Date(2021, 0, 4).getTime(),
      value: 1200
    }, {
      date: new Date(2021, 0, 5).getTime(),
      value: 740
    }]
  },
  hierarchy: {
    Packed: [{
      name: "Root",
      value: 0,
      children: [{
            name: "X-TEAM BGF World",
            type: "trend",
            value: 71
          }, {
            name: "X-TEAM BGF Future",
            type: "trend",
            value: 27
          }, {
            name: "X-TEAM BGF Tecnology",
            type: "trend",
            value: 67
          }, {
            name: "X-TEAM BGF Economy",
            type: "trend",
            value: 10
          }, {
            name: "X-TEAM BGF Research",
            type: "trend",
            value: 74
          }, {
            name: "X-TEAM BGF Global",
           type: "classic",
            value: 90
          }, {
            name: "X-TEAM BGF Income strategy",
           type: "classic",
            value: 47
          
        }, {
            name: "Team BlackRock",
           type: "team",
            value: 50
          }, {
            name: "Team reds",
           type: "team",
            value: 20
          }]
        }
      
    ]
  }
}

export default charts_data

// [ {
//   name: "Root",
//   value: 0,
//   children: [{
//     name: "A0",
//     children: [{
//       name: "A0A1",
//       children: [{
//         name: "A0A0A2",
//         value: 71
//       }, {
//         name: "A0A0B2",
//         children: [{
//           name: "A0A0B1A3",
//           value: 69
//         }, {
//           name: "A0A0B1B3",
//           value: 85
//         }]
//       }, {
//         name: "A0A0C2",
//         value: 48
//       }]
//     }, {
//       name: "A0B1",
//       value: 27
//     }, {
//       name: "A0C1",
//       children: [{
//         name: "A0C2A2",
//         value: 2
//       }, {
//         name: "A0C2B2",
//         children: [{
//           name: "A0C2B1A3",
//           value: 54
//         }, {
//           name: "A0C2B1B3",
//           value: 16
//         }]
//       }]
//     }, {
//       name: "A0D1",
//       value: 89
//     }]
//   }, {
//     name: "B0",
//     children: [{
//       name: "B1A1",
//       value: 9
//     }, {
//       name: "B1B1",
//       children: [{
//         name: "B1B1A2",
//         children: [{
//           name: "B1B1A0A3",
//           value: 35
//         }, {
//           name: "B1B1A0B3",
//           value: 40
//         }]
//       }, {
//         name: "B1B1B2",
//         value: 55
//       }]
//     }]
//   }, {
//     name: "C0",
//     children: [{
//       name: "C2A1",
//       children: [{
//         name: "C2A0A2",
//         value: 24
//       }, {
//         name: "C2A0B2",
//         value: 89
//       }, {
//         name: "C2A0C2",
//         children: [{
//           name: "C2A0C2A3",
//           children: [{
//             name: "C2A0C2A0A4",
//             children: [{
//               name: "C2A0C2A0A00",
//               value: 90
//             }, {
//               name: "C2A0C2A0A01",
//               value: 70
//             }, {
//               name: "C2A0C2A0A02",
//               value: 66
//             }, {
//               name: "C2A0C2A0A03",
//               value: 58
//             }]
//           }, {
//             name: "C2A0C2A0B4",
//             children: [{
//               name: "C2A0C2A0B10",
//               value: 80
//             }, {
//               name: "C2A0C2A0B11",
//               value: 40
//             }]
//           }]
//         }, {
//           name: "C2A0C2B3",
//           value: 44
//         }]
//       }, {
//         name: "C2A0D2",
//         children: [{
//           name: "C2A0D3A3",
//           value: 28
//         }, {
//           name: "C2A0D3B3",
//           value: 14
//         }]
//       }]
//     }, {
//       name: "C2B1",
//       value: 40
//     }, {
//       name: "C2C1",
//       children: [{
//         name: "C2C2A2",
//         children: [{
//           name: "C2C2A0A3",
//           value: 28
//         }, {
//           name: "C2C2A0B3",
//           children: [{
//             name: "C2C2A0B1A4",
//             value: 19
//           }, {
//             name: "C2C2A0B1B4",
//             children: [{
//               name: "C2C2A0B1B10",
//               value: 11
//             }, {
//               name: "C2C2A0B1B11",
//               value: 10
//             }, {
//               name: "C2C2A0B1B12",
//               value: 97
//             }, {
//               name: "C2C2A0B1B13",
//               value: 47
//             }]
//           }, {
//             name: "C2C2A0B1C4",
//             children: [{
//               name: "C2C2A0B1C20",
//               value: 40
//             }, {
//               name: "C2C2A0B1C21",
//               value: 37
//             }, {
//               name: "C2C2A0B1C22",
//               value: 53
//             }]
//           }]
//         }, {
//           name: "C2C2A0C3",
//           value: 96
//         }]
//       }, {
//         name: "C2C2B2",
//         value: 66
//       }]
//     }]
//   }]
// }]