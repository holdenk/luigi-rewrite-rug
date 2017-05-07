import { Project } from "@atomist/rug/model/Project";
import { Editor, Parameter, Tags } from "@atomist/rug/operations/Decorators";
import { EditProject } from "@atomist/rug/operations/ProjectEditor";
import { Pattern } from "@atomist/rug/operations/RugOperation";

/**
 * Rewrite HDFS targets.
 */
@Editor("LuigiTargetHDFSRewrite", "Rewrite HDFS targets")
@Tags("documentation")
export class LuigiTargetHDFSRewrite implements EditProject {

    @Parameter({
        displayName: "Local Target Dir",
        description: "Local Target Dir to use in place of HDFS",
        pattern: Pattern.any,
        validInput: "any file path",
        minLength: 1,
        maxLength: 100,
    })
    public inputParameter: string;

    public edit(project: Project) {
        project.addFile("hello.txt", "Hello, World!\n" + this.inputParameter + "\n");
    }
}

export const luigiTargetHDFSRewrite = new LuigiTargetHDFSRewrite();
