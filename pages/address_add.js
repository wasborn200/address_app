import Link from 'next/link';
import Layout from '../components/Layout';
import AddressAdd from '../components/AddressAdd';
import firebase from "firebase";

const viewAddressAdd = () =>(
  <Layout header="AddressAdd" title="Address create.">
    <AddressAdd />
    <hr/>
    <div>
      <Link href="./address">
        <button>back</button>
      </Link>
    </div>
  </Layout>
);

export default viewAddressAdd
