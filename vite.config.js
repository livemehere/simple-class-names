import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import {join} from 'path'

export default defineConfig({
    plugins:[react()],
    build:{
        lib:{
            entry: join(__dirname, 'src/index.ts'),
            name:'simple-class-names',
            fileName:'index'
        }
    }
})