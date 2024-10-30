import { ref } from "vue";

const getJewelery = () => {
  const jewelery = ref([]);
  const error = ref(null);

  const dataFetching = async () => {
    try {
      const res = await fetch("http://localhost:4000/jewelery");
      if (!res.ok) {
        throw Error("Jewwlery list is not avalible !");
      }
      jewelery.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { jewelery, error, dataFetching };
};

export default getJewelery;
