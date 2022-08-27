<script setup>
import { ref } from 'vue'
import axios from 'axios';
</script>

<template>
    <div class="m-auto">
        <form @submit="postData" method="POST" style="text-align: center" class="flex flex-col w-full gap-10">
            <h1 class="font-medium text-3xl">Prediksi Stress</h1>
            <div class="flex flex-row w-full gap-10">
                <div class="grid h-full p-5 pb-8 flex-grow card bg-base-300 rounded-box">
                    <label class="label">
                        <span class="label-text">Snoring Range:</span>
                    </label>
                    <input v-model="formData.snoring_range" type="number" name="snoring_range" id="snoring_range"
                        step="any" placeholder="Enter in dB" class="input input-bordered w-full max-w-xs" required />
                    <label class="label">
                        <span class="label-text">Respiration Rate:</span>
                    </label>
                    <input v-model="formData.respiration_rate" type="number" name="respiration_rate"
                        id="respiration_rate" step="any" placeholder="Enter respiration_rate" required
                        class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">Temperature:</span>
                    </label>
                    <input v-model="formData.temperature" type="number" name="temperature" id="temperature" step="any"
                        placeholder="Enter in F" required class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">Limb Movement:</span>
                    </label>
                    <input v-model="formData.limb_movement" type="number" name="limb_movement" id="limb_movement"
                        step="any" placeholder="Enter Limb Movement" required
                        class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="divider divider-horizontal"></div>
                <div class="grid h-full p-5 pb-8 flex-grow card bg-base-300 rounded-box">
                    <label class="label">
                        <span class="label-text">Blood Oxygen:</span>
                    </label>

                    <input v-model="formData.blood_oxygen" type="number" name="blood_oxygen" id="blood_oxygen"
                        step="any" placeholder="Enter blood_oxygen" required
                        class="input input-bordered w-full max-w-xs" />

                    <label class="label">
                        <span class="label-text">REM:</span>
                    </label>

                    <input v-model="formData.rem" type="number" name="rem" id="rem" step="any" placeholder="Enter REM"
                        required class="input input-bordered w-full max-w-xs" />

                    <label class="label">
                        <span class="label-text">Sleep Hour:</span>
                    </label>
                    <input v-model="formData.sleep_hour" type="number" name="sleep_hour" id="sleep_hour" step="any"
                        placeholder="Enter Sleep Hour" required class="input input-bordered w-full max-w-xs" />

                    <label class="label">
                        <span class="label-text">Heart Rate:</span>
                    </label>

                    <input v-model="formData.heart_rate" type="number" name="heart_rate" id="heart_rate" step="any"
                        placeholder="Enter heart rate" required class="input input-bordered w-full max-w-xs" />
                </div>
            </div>
            <div class="block">
                <button type="Submit" class="btn w-64 rounded-full">Run</button>
            </div>
        </form>
        <p style="text-align: center" class="card bg-base-300 rounded-box my-5 py-5">
            Level Stress : {{ output }}
        </p>
        <!-- <p>Snoring Range: {{ formData.snoring_range }}</p> -->
    </div>
</template>

<script>
const requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};
export default {
    name: 'IndexTes',
    data() {
        return {
            formData: {
                snoring_range: null,
                respiration_rate: null,
                temperature: null,
                limb_movement: null,
                blood_oxygen: null,
                rem: null,
                sleep_hour: null,
                heart_rate: null,
            },
            output: null
        }
    },
    methods: {
        postData(e) {
            e.preventDefault();
            // console.warn(this.formData);
            // fetch("http://127.0.0.1:5000/api/v1/predict", this.formData, requestOptions)
            axios.post('https://predict-sleep.fly.dev/api/v1/predict', this.formData, requestOptions)
                .then((res) => {
                    console.warn(res);
                    this.output = res.data.prediction

                    //Perform Success Action
                })
                .catch((error) => {
                    this.output = error
                }).finally(() => {
                    //Perform action in always
                });
        }
    }

}
</script>