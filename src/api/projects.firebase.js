import { app } from "./firebaseconfig.js";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

class Project {
  constructor() {
    // colleciton
    this.document = collection(db, "projects");
    this.all = getDocs(this.document);
  }

  async getProject(id) {
    const doc = await getDoc(this.document.doc(id));
    return doc;
  }

  async addProject(project) {
    const doc = await this.document.add(project);
    return doc;
  }

  async updateProject(id, project) {
    const doc = await this.document.doc(id).update(project);
    return doc;
  }

  async deleteProject(id) {
    const doc = await this.document.doc(id).delete();
    return doc;
  }
}

let Projects = new Project();

export { Projects };
