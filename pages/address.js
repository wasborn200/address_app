import Link from 'next/link';
import Layout from '../components/Layout';
import Address from '../components/Address';

const viewAddress = () =>(
  <Layout header="Address" title="Address book.">
    <Address />
    <hr/>
    <Link href="./address_add">
      <button>add</button>
    </Link>
  </Layout>
);

export default viewAddress
