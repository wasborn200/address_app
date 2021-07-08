import Link from 'next/link';
import Layout from '../components/Layout';
import AddressShow from '../components/AddressShow';
import firebase from "firebase";

const viewAddressShow = () =>(
  <Layout header="AddressShow" title="Address show.">
    <AddressShow />
    <hr/>
    <div>
      <Link href="./address">
        <button>back</button>
      </Link>
    </div>
  </Layout>
);

export default viewAddressShow
