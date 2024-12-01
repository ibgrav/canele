import type { GitHub } from "arctic";
import type { Store } from "./impl";
import type { GitHubStoreData } from "./github";

export interface CaneleLocals {
  store: Store;
  github: {
    oauth: GitHub;
    data: Partial<GitHubStoreData>;
  };
}

declare global {
  namespace App {
    interface Locals {
      canele: CaneleLocals;
    }
  }
}
