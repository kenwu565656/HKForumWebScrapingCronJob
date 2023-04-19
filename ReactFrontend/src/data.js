export const Userdata = [{date: "3/7/2022", task: "Code commit", status: "Success", user: "Admin 1", remark: "Updated Chart"},
{date: "2/7/2022", task: "Code Build", status: "Fail", user: "Admin 1", remark: "Updated Chart"},
{date: "2/7/2022", task: "Deployment", status: "Success", user: "Admin 1", remark: "Updated Home"},
{date: "2/7/2022", task: "Code Build", status: "Success", user: "Admin 2", remark: "Updated Home"},
{date: "1/7/2022", task: "Code commit", status: "Success", user: "Admin 1", remark: "Updated Home"},
{date: "1/7/2022", task: "Code commit", status: "Success", user: "Admin 1", remark: "Debug Chart"},
{date: "1/7/2022", task: "Code Build", status: "Fail", user: "Admin 2", remark: "Updated Chart"},
{date: "1/7/2022", task: "Deployment", status: "Success", user: "Admin 2", remark: "Updated Home"},
{date: "1/7/2022", task: "Code Build", status: "Success", user: "Admin 2", remark: "Updated Home"},
{date: "1/7/2022", task: "Code commit", status: "Success", user: "Admin 1", remark: "Updated Home"},
{date: "30/6/2022", task: "Code commit", status: "Success", user: "Admin 1", remark: "Updated Chart"},
{date: "29/6/2022", task: "Code Build", status: "Fail", user: "Admin 1", remark: "Updated Chart"},
{date: "29/6/2022", task: "Deployment", status: "Success", user: "Admin 1", remark: "Updated Home"},
{date: "29/6/2022", task: "Code Build", status: "Success", user: "Admin 2", remark: "Updated Home"},
{date: "29/6/2022", task: "Code commit", status: "Success", user: "Admin 1", remark: "Updated Home"},
{date: "29/6/2022", task: "Code commit", status: "Success", user: "Admin 1", remark: "Debug Chart"},
{date: "29/6/2022", task: "Code Build", status: "Fail", user: "Admin 2", remark: "Updated Chart"},
{date: "29/6/2022", task: "Deployment", status: "Success", user: "Admin 2", remark: "Updated Home"},
{date: "29/6/2022", task: "Code Build", status: "Success", user: "Admin 2", remark: "Updated Home"},
{date: "28/6/2022", task: "Code commit", status: "Success", user: "Admin 1", remark: "Updated Home"}
];

export const bardata1 = {
    labels: ["13:14", "13:15", "13:16", "13:17", "13:18", "13:19", "13:20", "13:21"],
    datasets: [
      {
        label: "CPU Usage",
        data: [10, 14, 14, 14, 13, 14, 14, 13],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  export const bardata2 = {
    labels: ["13:14", "13:15", "13:16", "13:17", "13:18", "13:19", "13:20", "13:21"],
    datasets: [
      {
        label: "Memory Allocation",
        data: [10, 14, 7, 10, 6, 8, 10, 10],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  export const bardata3 = {
    labels: ["13:14", "13:15", "13:16", "13:17", "13:18", "13:19", "13:20", "13:21"],
    datasets: [
      {
        label: "DB Process Time",
        data: [15, 15, 14, 15, 13, 15, 15, 15],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  export const linedata = {
    labels: ["28/6/2022", "29/6/2022", "30/6/2022", "01/7/2022", "02/7/2022", "03/7/2022"],
    datasets: [
      {
        label: "Actions by date",
        data: [4, 6, 7, 2, 5, 7],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  export const piedata = {
    labels: ["Success", "Fail"],
    datasets: [
      {
        label: "Actions Sucess Rate",
        data: [15, 7],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black"
      },
    ],
  };



