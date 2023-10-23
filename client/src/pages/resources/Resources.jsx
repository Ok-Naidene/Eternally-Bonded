import './resources.css'; 

export default function Resources() {
  return (
    <div className="resources">
      <h1 className="resTitle">Resources</h1>
      <div className="resList">
        <ul>
          <li>
            <div className="resListItem">
              <a href="https://www.dougy.org/grief-support-resources" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-hand-holding-hand" style={{ color: '#336233' }}> </i> 
                Dougy Center - Grieving Children and Families
              </a>
            </div>
          </li>
          <li>
            <div className="resListItem">
              <a href="https://www.copingwithloss.co/" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-heart" style={{ color: '#336233' }}> </i> 
                Coping with loss - Online Courses
              </a>
            </div>
          </li>
          <li>
            <div className="resListItem">
              <a href="https://www.griefincommon.com/" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-hands-helping" style={{ color: '#336233' }}> </i> 
                Grief in common - Online Support Group
              </a>
            </div>
          </li>
          <li>
            <div className="resListItem">
              <a href="https://www.depression.org.nz/" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-frown" style={{ color: '#336233' }}> </i> 
                Depressed? Need someone to talk to?
              </a>
            </div>
          </li>
          <li>
            <div className="resListItem">
              <a href="https://mentalhealth.org.nz/conditions/condition/grief-and-loss" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-brain" style={{ color: '#336233' }}> </i> 
                Mental health - Grief and Loss
              </a>
            </div>
          </li>
          <li>
            <div className="resListItem">
              <a href="https://whatsyourgrief.com/" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-info-circle" style={{ color: '#336233' }}> </i> 
                What's Your Grief? - For Grievers and Supporters
              </a>
            </div>
          </li>
          <li>
          <div className="resListItem">
              <a href="https://healthify.nz/support/g/grief-loss-support/" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-hand-holding-heart" style={{ color: '#336233' }}> </i> 
                Healthify NZ - Grief and Loss Support
              </a>
            </div>
          </li>
          <li>
            <div className="resListItem">
              <a href="https://manaake.health.nz/supporting-your-child/supporting-your-childs-wellbeing/managing-emotions/grief-and-loss/" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-hands-helping" style={{ color: '#336233' }}> </i> 
                Mana Ake - Supporting Your Child's Wellbeing - Grief and Loss
              </a>
            </div>
          </li>
          <li>
            <div className="resListItem">
              <a href="https://good-grief.org/resources/" target="_blank" rel="noopener noreferrer">
                <i className="resIcon fa-solid fa-info-circle" style={{ color: '#336233' }}> </i> 
                Good Grief - Additional Resources
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}