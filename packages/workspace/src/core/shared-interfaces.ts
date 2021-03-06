import { WorkspaceResults } from '@nrwl/workspace/src/command-line/workspace-results';

export type ImplicitDependencyEntry<T = '*' | string[]> = {
  [key: string]: T | ImplicitJsonSubsetDependency<T>;
};

export interface ImplicitJsonSubsetDependency<T = '*' | string[]> {
  [key: string]: T | ImplicitJsonSubsetDependency<T>;
}

export interface NxJson<T = '*' | string[]> {
  implicitDependencies?: ImplicitDependencyEntry<T>;
  npmScope: string;
  projects: {
    [projectName: string]: NxJsonProjectConfig;
  };
  tasksRunnerOptions?: {
    [tasksRunnerName: string]: {
      runner: string;
      options?: object;
    };
  };
}

export interface NxJsonProjectConfig {
  implicitDependencies?: string[];
  tags?: string[];
}

export interface Environment {
  nxJson: NxJson;
  workspaceJson: any;
  workspaceResults: WorkspaceResults;
}
