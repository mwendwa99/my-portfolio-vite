import { app } from "./firebaseconfig.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);
// let data = [];

class Projects {
  constructor() {
    this.data = [];
  }

  async getProjects() {
    const projects = await collection(db, "projects");
    const docs = await getDocs(projects);
    if (docs.length > 0) {
      this.data = docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    } else {
      this.data = [
        {
          id: "0000000001",
          name: "No projects yet",
          description: "",
          createdAt: new Date(),
        },
      ];
    }
    return this.data;
  }

  async getProject(id) {
    const project = await collection("projects").doc(id);
    const doc = await getDoc(project);
    return doc;
  }

  async addProject(project) {
    const projects = await collection("projects");
    const doc = await projects.add(project);
    return doc;
  }

  async updateProject(id, project) {
    const projects = await collection("projects");
    const doc = await projects.doc(id).update(project);
    return doc;
  }

  async deleteProject(id) {
    const projects = await collection("projects");
    const doc = await projects.doc(id).delete();
    return doc;
  }
}

let projects = new Projects();

export { projects };
