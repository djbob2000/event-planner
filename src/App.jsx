// import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { MyEventsPage } from './pages/MyEventsPage/MyEventsPage';
import { CreateEventPage } from './pages/CreateEventPage/CreateEventPage';
import { EventDetailsPage } from './pages/EventDetailsPage/EventDetailsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyEventsPage />} />
          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
