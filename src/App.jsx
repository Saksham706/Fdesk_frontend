import { Route, Routes, useLocation } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import OAuthSuccess from './components/OAuthSuccess';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SalaryIncome from './components/SalaryIncome/SalaryIncome';
import PrepaidTax from './components/PrepaidTax/PrepaidTax';

// Knowledge Center --------------------------------------------->
import Faq from './pages/Knowledge center/Faq/Faq';
// -------------------------------------------------------------->

// Prouducts----------------------------------------------------->
import FileReturn from './pages/Products/FileReturn/FileReturn';
import Form16 from './pages/Products/Form16/Form16'
import CArequest from './pages/Products/CArequest/CArequest';
import TdsSolution from './pages/Products/TdsSolution/TdsSolution';
import NriTax from './pages/Products/NriTax/NriTax'
import TaxConsultancy from './pages/Products/TaxConsultancy/TaxConsultancy';
import Capitalgaintax from './pages/Products/Capitalgaintax/Capitalgaintax';
import Incometaxnotice from './pages/Products/Incometaxnotice/Incometaxnotice';
//----------------------------------------------------------------------------->

// Guides----------------------------------------------------------------------->
import Aadhar from './pages/Guides/Aadhar/Aadhar'
import CapitalGainIncome from './pages/Guides/CapitalGainIncome/CapitalGainIncome';
import Efilling from './pages/Guides/Efilling/Efilling'
import HouseProperty from './pages/Guides/HouseProperty/HouseProperty';
import ITN from './pages/Guides/ITN/ITN'
import IncomeTaxRefund from './pages/Guides/IncomeTaxRefund/IncomeTaxRefund';
import IncomeTaxSlabs from './pages/Guides/IncomeTaxSlabs/IncomeTaxSlabs';
import IncomeTaxVerif from './pages/Guides/IncomeTaxVerif/IncomeTaxVerif';
import PanCard from './pages/Guides/PanCard/PanCard';
import SalaryIncomeI from './pages/Guides/SalaryIncomeI/SalaryIncomeI';
import Section80 from './pages/Guides/Section80/Section80'
import TDSI from './pages/Guides/TDSI/TDSI'
import GST from './pages/Guides/GST/GST';
import GstSystem from './pages/Guides/GstSystem/GstSystem';
import GstRegistration from './pages/Guides/GstRegistration/GstRegistration';
import InputTaxCredit from './pages/Guides/InputTaxCredit/InputTaxCredit';
import GstProcedure from './pages/Guides/GstProcedure/GstProcedure';
import GstReturn from './pages/Guides/GstReturn/GstReturn';
import GstEwayBills from './pages/Guides/GstEwayBills/GstEwayBills';
import GstRates from './pages/Guides/GstRates/GstRates';
//---------------------------------------------------------------------------->

import ITCalculator from './pages/Tools/ITCalculator/ITCalculator';
import HRA from './pages/Tools/HRA/HRA';
import ITRelig from './pages/Tools/ITRelig/ITRelig';
import Section234F from './pages/Tools/Section234F/Section234F';
import Calculator80c from './pages/Tools/80cCalculator/Calculator80c';
import CryptocurrencyTaxCalculator from './pages/Tools/crypto-currency-tax-calculator/CryptocurrencyTaxCalculator';
import SIcalculator from './pages/Tools/SIcalculator/SIcalculator';
import Calculator80DD from './pages/Tools/80ddCalculator/Calculator80DD';
import CiCalculator from './pages/Tools/CiCalculator/CiCalculator';
import GratuityCalculator from './pages/Tools/GratuityCalculator/GratuityCalculator';
import CalTDS from './pages/Tools/CalTDS/CalTDS';
import Cal80tta from './pages/Tools/Cal80tta/Cal80tta';
import Cal80u from './pages/Tools/Cal80u/Cal80u';
import Form12 from './pages/Tools/Form12/Form12';
import TACcakculator from './pages/Tools/TACcalculator/TACcakculator';
import INFHPcal from './pages/Tools/INFHPcal/INFHPcal';
import Section80Dcal from './pages/Tools/Section80Dcal/Section80Dcal';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <div className="app">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/salary-Income' element={<SalaryIncome/>}/>
          <Route path='/PrepaidTax' element={<PrepaidTax/>}/>
          // Products------------------------------------------
          <Route path='/file-return' element={<FileReturn />} />
          <Route path='/form16' element={<Form16/>}/>
          <Route path="/ca-request" element={<CArequest/>}/>
          <Route path='/tdssolution' element={<TdsSolution/>}/>
          <Route path='/nritax' element={<NriTax/>}/>
          <Route path='/taxConsltancy' element={<TaxConsultancy/>}/>
          <Route path='/capitalgaintax' element={<Capitalgaintax/>}/>
          <Route path='/incometaxnotice' element={<Incometaxnotice/>}/>
         // -----------------------------------------------------------
          <Route path='/gst' element={<GST/>}/>
          <Route path='/gst-system' element={<GstSystem/>}/>
          <Route path='/gst-registration' element={<GstRegistration/>}/>
          <Route path='/input-tax-credit' element={<InputTaxCredit/>}/>
          <Route path='/gst-procedure' element={<GstProcedure/>}/>
          <Route path='/gst-return' element={<GstReturn/>}/>
          <Route path='/gst-eway-bills' element={<GstEwayBills/>}/>
          <Route path='/gst-rates' element={<GstRates/>}/>
          <Route path='/aadhar' element={<Aadhar/>}/>
          <Route path='/capital-gain-income' element={<CapitalGainIncome/>}/>
          <Route path='/E-Filling' element={<Efilling/>}/>
          <Route path='/house-property' element={<HouseProperty/>}/>
          <Route path='/income-tax-Notice' element={<ITN/>}/>
          <Route path='/income-tax-refund' element={<IncomeTaxRefund/>}/>
          <Route path='/income-tax-slabs' element={<IncomeTaxSlabs/>}/>
          <Route path='/income-tax-verification' element={<IncomeTaxVerif/>}/>
          <Route path='/pan-card' element={<PanCard/>}/>
          <Route path='/salary-incomeI' element={<SalaryIncomeI/>}/>
          <Route path='/section80' element={<Section80/>}/>
          <Route path='/TDS' element={<TDSI/>}/>
 // ---------------------------------------------------------------------------
          <Route path='/income-tax-calculator' element={<ITCalculator/>}/>
          <Route path='/hra-calculator' element={<HRA/>}/>
          <Route path='/itr-eligibilty' element={<ITRelig/>}/>
          <Route path='/section234f-calculator' element={<Section234F/>}/>
          <Route path='/80c-Calculator' element={<Calculator80c/>}/>
          <Route path='/crypto-currency-tax-calculator' element={<CryptocurrencyTaxCalculator/>}/>
          <Route path='/simple-interest-calculator' element={<SIcalculator/>}/>
          <Route path='/80dd-calculator' element={<Calculator80DD/>}/>
          <Route path='/compound-interest-calculator' element={<CiCalculator/>}/>
          <Route path='/form12BB' element={<Form12/>}/>
          <Route path='/gratuity-calculator' element={<GratuityCalculator/>}/>
          <Route path='/tds-calculator' element={<CalTDS/>}/>
          <Route path='/80tta-calculator' element={<Cal80tta/>}/>
          <Route path='/80u-calculator' element={<Cal80u/>}/>
          <Route path='/transport-allowance-calculator' element={<TACcakculator/>}/>
          <Route path='/house-property-calculator' element={<INFHPcal/>}/>
          <Route path='/80d-calculator' element={<Section80Dcal/>}/>
        </Routes>
      </div>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
