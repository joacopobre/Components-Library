import { faCloudArrowUp, faCloudArrowDown, faRotate } from "@fortawesome/free-solid-svg-icons"

export default function getCardMeta(type) {
  if (type === "upload") {
    return { icon: faCloudArrowUp, message: "Easy Deployment" }
  } else if (type === "download") {
    return { icon: faCloudArrowDown, message: "Easy Download" }
  } else if (type === "update") {
    return { icon: faRotate, message: "Easy To Update" }
  } else {
    return { icon: null, message: "Fail to Create card" }
  }
}
