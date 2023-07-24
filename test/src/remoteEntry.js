import { loadRemoteEntry } from "@module-federation/nextjs-mf";

loadRemoteEntry("http://localhost:3001/remoteEntry.js", "remote")
  .then(() => {
    console.log("Remote entry loaded");
  })
  .catch((err) => console.error("Error loading remote entry", err));
