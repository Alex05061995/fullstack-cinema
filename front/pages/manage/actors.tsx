import ActorList from "@/components/screens/admin/actors/ActorList";
import { NextPageAuth } from "@/shared/types/auth.types"



const ActorsListPage: NextPageAuth = () => {
  return (
    <ActorList />
  )
}

ActorsListPage.isOnlyAdmin = true;

export default ActorsListPage