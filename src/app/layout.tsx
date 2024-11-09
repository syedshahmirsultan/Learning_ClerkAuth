import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <header className='flex justify-around mt-4 mb-4' ><h1>Cover Corp</h1> <UserButton showName/></header>
<main>
          <SignedOut>
          <SignIn routing="hash"/>
          </SignedOut>
          <SignedIn>
          {children}
          </SignedIn>
          </main> </body>
      </html>
    </ClerkProvider>
  )
}