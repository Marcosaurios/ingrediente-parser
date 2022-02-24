<script>
    import { onMount } from "svelte";

    import * as parser from "../../ingredientes-parser";

    export let search = "20gr de arroz";
    export let parsed = {};

    // todo debounce it
    function handleInput() {
        parsed = parser.parse(search);
    }

    onMount(() => {
        handleInput();
    });
</script>

<main>
    <h2>Ingrediente-parser</h2>
    <p>Introduce un ingrediente para saber sus detalles</p>

    <input type="text" bind:value={search} on:input={handleInput} />

    <div class="result">
        <div class="result__amount">
            Cantidad: <span class="bold">{parsed.amount}</span>
        </div>
        <div class="result__ingredient">
            Ingrediente: <span class="bold">{parsed.ingredient}</span>
        </div>
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h2 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    p {
        font-style: italic;
        color: dimgray;
    }

    .result {
        background-color: rgba(30, 143, 255, 0.404);
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        padding: 1em;
        border-radius: 10px;
    }

    .bold {
        font-weight: 600;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
