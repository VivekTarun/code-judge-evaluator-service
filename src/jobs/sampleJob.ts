import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefinition";

export default class sampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;
    constructor(payload: Record<string, unknown>) {
        this.payload = payload;
        this.name = this.constructor.name;
    }
    
    handle = () => {
        console.log("handle of the job called");
    };

    failed = (job?: Job) : void  => {
        console.log("job failed");
        if(job) {
            console.log(job.id);
        }
    };
}