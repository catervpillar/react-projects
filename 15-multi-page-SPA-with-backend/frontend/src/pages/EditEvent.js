import { useRouteLoaderData } from 'react-router-dom';

import PageContent from '../components/PageContent';
import EventForm from '../components/EventForm';

const EditEventPage = () => {
    const data = useRouteLoaderData('event-detail');

    return <PageContent title="Edit Event">
        <EventForm method="patch" event={data.event} />
    </PageContent>;
};

export default EditEventPage;