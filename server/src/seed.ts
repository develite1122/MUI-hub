import Hub from './models/hub/Hub';
import mongoose from 'mongoose';

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

main().catch(err => console.log(err));
Hub.create(
  {
  "code": 'MA53',
  "programDateStart": new Date(),
  "programDateEnd": new Date(),
  "status": "InProgress",
  "voyage": 'EM.367',
  "containers": 80,
  "containersRemaining":50,
  "progress": 62.5
});

Hub.create(
  {
  "code": 'MA54',
  "programDateStart": new Date(),
  "programDateEnd": new Date(),
  "status": "Schedueled",
  "voyage": 'EM.367',
  "containers": 80,
  "containersRemaining":50,
  "progress": 30
});
Hub.create(
  {
  "code": 'MA55',
  "programDateStart": new Date(),
  "programDateEnd": new Date(),
  "status": "InProgress",
  "voyage": 'EM.367',
  "containers": 80,
  "containersRemaining":50,
  "progress": 20
});