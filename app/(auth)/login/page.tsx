import React from 'react'
import styles from "./login.module.css"
export default function LoginPage() {
  return (
    <div className={styles.login}>
      login page
    </div>
  )
}

// server components : are rendered by default 
// client components: to render a component to the client use client
// server actions:  are function rin on the server
// we will use json server no other dbs since it will enable us to do all CRUD  operations