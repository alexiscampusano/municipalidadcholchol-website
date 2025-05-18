import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import HomePage from '@/pages/home';
import NoticiasPage from '@/pages/noticias';
import ArticleDetailPage from '@/pages/noticias/[id]';
import ServiciosPage from '@/pages/servicios';
import ContactPage from '@/pages/contacto';
import ComunaPage from '@/pages/la-comuna';
import EncuestasCiudadanasPage from '@/pages/encuestas-ciudadanas';
import { Toaster } from '@/components/ui/toaster';

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/noticias", element: <NoticiasPage /> },
  { path: "/noticias/:id", element: <ArticleDetailPage /> },
  { path: "/servicios", element: <ServiciosPage /> },
  { path: "/contacto", element: <ContactPage /> },
  { path: "/la-comuna", element: <ComunaPage /> },
  { path: "/municipio", element: <ComunaPage /> },
  { path: "/unidades-municipales", element: <ServiciosPage /> },
  { path: "/encuestas-ciudadanas", element: <EncuestasCiudadanasPage /> },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;