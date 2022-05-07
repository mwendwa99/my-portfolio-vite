import axios from "axios";

// var config = {
//   method: "get",
//   url: "http://cmis.ombudsman.go.ke/",
//   headers: {
//     Cookie:
//       "_csrf=84460fac279c544860f93c22cb81f2c9ddaa5baf0a5cec69b239d1676a2669eaa%3A2%3A%7Bi%3A0%3Bs%3A5%3A%22_csrf%22%3Bi%3A1%3Bs%3A32%3A%22gvVarpJ0WMpFczMx57jFRxNKzSpYx4Xx%22%3B%7D",
//   },
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const data = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a project",
    image: "https://via.placeholder.com/150",
    link: "#",
    tags: ["tag1", "tag2", "tag3"],
    api: "api/projects/1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a project",
    image: "https://via.placeholder.com/150",
    link: "#",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a project",
    image: "https://via.placeholder.com/150",
    link: "#",
    tags: ["tag1", "tag2", "tag3"],
  },
];

export default data;
