import { useState } from 'react';
import CategoryFilter from '../components/Categoryfilter';
import ProjectList from '../components/ProjectList';
import WelcomeBand from '../components/WelcomeBand';
import CartSummary from '../components/CartSummary';

function ProjectPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="container mt-4">
      <CartSummary />
      <WelcomeBand></WelcomeBand>
      <div className="row">
        <div className="col-md-3">
          <CategoryFilter
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          ></CategoryFilter>
        </div>
        <div className="col-md-9">
          <ProjectList selectedCategories={selectedCategories}></ProjectList>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
