import { Schema, model, Document } from 'mongoose';

import { IHub } from '../../@types';

export interface IHubDocument extends Document, IHub {}

const hubSchema: Schema = new Schema<IHub>({
    code: { type: String, required: true, unique: true },
    programDateStart: {type: Date, required: true},
    programDateEnd: {type: Date, required: true},
    status: { type: String, required: true },
    voyage: {type: String, required: true},
    containers: {type: Number, required: true },
    containersRemaining: {type: Number, required: true },
    progress: {type: Number, required: true }
});

export default model<IHubDocument>('Hub', hubSchema);
