import ModalManager from "./ModalManager.js";
import RemoteFileLoader from "./RemoteFileLoader.js";

const newWebsite = 'https://opera-vps.3bees.it'

document.addEventListener('DOMContentLoaded', async () => {
    await RemoteFileLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", {integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC", crossorigin:"anonymous"})
    await RemoteFileLoader.loadJs("https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", { integrity:"sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p", crossorigin:"anonymous"})
    await RemoteFileLoader.loadJs("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js", { integrity:"sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF", crossorigin:"anonymous"})

    if(ModalManager.shouldShow()) {
        const manager = new ModalManager(newWebsite)
        manager.show()
    }
})