// import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(() => import('./components/Layout/Layout'));
const MyEventsPage = lazy(() => import('./pages/MyEventsPage/MyEventsPage'));
const CreateEventPage = lazy(() =>
  import('./pages/CreateEventPage/CreateEventPage')
);
const EventDetailsPage = lazy(() =>
  import('./pages/EventDetailsPage/EventDetailsPage')
);
const EventEditPage = lazy(() => import('./pages/EventEditPage/EventEditPage'));

function App() {
  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MyEventsPage />} />
            <Route path="/create" element={<CreateEventPage />} />
            <Route path="/event/:id" element={<EventDetailsPage />} />
            <Route path="/event/:id/edit" element={<EventEditPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
