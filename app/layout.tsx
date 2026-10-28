import type {Metadata} from "next";
export const metadata:Metadata={title:"Arcus Development",description:"Ολικές ανακαινίσεις διαμερισμάτων με μελέτη, 3D και φροντίδα μετά την παράδοση."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="el"><body>{children}</body></html>;}
