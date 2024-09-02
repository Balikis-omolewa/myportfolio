import { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="services">
      <h2>What I Am Great At</h2>
      <center>
      <h3 className="span text-center">My Services</h3></center>
      <div className="container">
        <div className="tab-container">
          <div className="tab-buttons">
            <button onClick={() => openTab('tab1')}>
              <img src="/img/wb.png" width="256" alt="Web Development Icon" />
            </button>
            <button onClick={() => openTab('tab2')}>
              <img src="/img/ec.png" width="256" alt="E-commerce Icon" />
            </button>
            <button onClick={() => openTab('tab3')}>
              <img src="/img/wc.png" width="256" alt="Web Consulting Icon" />
            </button>
            <button onClick={() => openTab('tab4')}>
              <img src="/img/mc.png" width="256" alt="Mobile Consulting Icon" />
            </button>
          </div>

          <div id="tab1" className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}>
            <img src="/img/wb-c.png" width="100%" alt="Web Development Service" style={{ marginTop: '3.5%' }} />
          </div>

          <div id="tab2" className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}>
            <img src="/img/ec-c.png" width="100%" alt="E-commerce Service" style={{ marginTop: '15%' }} />
          </div>

          <div id="tab3" className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}>
            <img src="/img/wc-c.png" width="100%" alt="Web Consulting Service" style={{ marginTop: '27%' }} />
          </div>

          <div id="tab4" className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}>
            <img src="/img/mc-c.png" width="100%" alt="Mobile Consulting Service" style={{ marginTop: '39%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
