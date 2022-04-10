import LoadingStore from "./LoadingStore";
import UserStore from "./UserStore";
import NavigationStore from "./NavigationStore";
import PaintStore from "./PaintStore"

const loadingStore = new LoadingStore()
const navigationStore = new NavigationStore()
const userStore = new UserStore()
const paintStore = new PaintStore()

export default {
  loadingStore: loadingStore,
  navigationStore: navigationStore,
  userStore: userStore,
  paintStore: paintStore,
}
