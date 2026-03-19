import { useState } from 'react';

interface Tarefa {
    id: string;
    texto: string;
}

export function useTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
}