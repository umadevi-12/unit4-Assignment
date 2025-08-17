import { Feedback } from "../domain/types";

const KEY = "feedback-data";

export class LocalStorageRepository {
  async save(fb: Feedback) {
    const all = await this.list();
    all.push(fb);
    localStorage.setItem(KEY, JSON.stringify(all));
  }

  async list(): Promise<Feedback[]> {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Feedback[]) : [];
  }
}

export const repo = new LocalStorageRepository();
