import { spfx } from "../../../../../../utils/spfx";
import { Project } from '../../project-model';
import { DependencyRule } from "./DependencyRule";

export class FN001019_DEP_knockout extends DependencyRule {
  constructor(packageVersion: string) {
    super('knockout', packageVersion, false, true);
  }

  get id(): string {
    return 'FN001019';
  }

  customCondition(project: Project): boolean {
    return spfx.isKnockoutProject(project);
  }
}