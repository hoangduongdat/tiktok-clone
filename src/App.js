import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publishRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publishRoutes.map((route, index) => {
                        let Layout;
                        if (route.layout === null) Layout = Fragment;
                        else Layout = route.layout || DefaultLayout; // nếu có layout thì lấy layout 0 thì lấy DefaultLayout

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
