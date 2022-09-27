import axios from 'axios';
import {promises as fs} from 'fs';

axios.get('https://api.spacexdata.com/v5/launches/latest')
  .then(function (response) {
    console.dir(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(async function () {
    console.log("===JS Read File Async===");
    console.log(await readText("data.txt"));
  });

  async function readText(filePath) {
    const data = await fs.readFile(filePath, "utf8");
    return data;
}