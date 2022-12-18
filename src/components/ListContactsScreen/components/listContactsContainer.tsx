import { UserContactCard } from '../Dto/ListContactsScreenDto'
import { ContactCardContainer } from './contactCardContainer'
export function ListContactsContainer({ data }: { data: UserContactCard[] }) {

    return (
        data&&data.map((user:UserContactCard)=>
            <ContactCardContainer user={user} key={user.id}/>
        )
    )
}