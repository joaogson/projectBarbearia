import Barber from "@/app/Barber/page";
import Client from "@/app/Client/page";
import Service from "@/app/Service/page";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: 24 }}>
      <h2 style={{ marginBottom: 24 }}>Trabalho WEB</h2>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
        <Link href="/Barber" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.1em', padding: '12px 32px', borderRadius: 8, background: '#fff', border: '1px solid #ddd', transition: 'background 0.2s, border 0.2s' }}>Barber</Link>
        <Link href="/Client" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.1em', padding: '12px 32px', borderRadius: 8, background: '#fff', border: '1px solid #ddd', transition: 'background 0.2s, border 0.2s' }}>Client</Link>
        <Link href="/Service" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.1em', padding: '12px 32px', borderRadius: 8, background: '#fff', border: '1px solid #ddd', transition: 'background 0.2s, border 0.2s' }}>Service</Link>
      </nav>
    </header>
  );
}
