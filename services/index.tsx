import { request, gql } from "graphql-request";
const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clx1qd3bw02wb07uquuy3pque/master";
export const getCarList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        seat
        updatedAt
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query storeLocation($first: Int) {
      storesLocations(first: $first) {
        adress
      }
    }
  `;

  const result = await request(MASTER_URL, query, { first: 50 });
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data: {
          userName: "`+formValue.userName+`"
          contactNumber: "`+formValue.contactNumber+`"
          pickUpDate: "`+formValue.pickUpDate+`"
          dropOffDate: "`+formValue.dropOffDate+`"
          dropOffTime: "`+formValue.dropOffTime+`"
          pickUpTime: "`+formValue.pickUpTime+`"
          carId: { connect: { id: "`+formValue.carId+`" } }
        }
      ) {
        id
      }
    }
  `
  const headers = {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTg3ODIzOTUsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEtc2hhcmVkLXVzZWExLTAyLmh5Z3JhcGguY29tL3YyL2NseDFxZDNidzAyd2IwN3VxdXV5M3BxdWUvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtdXMtZWFzdC0xLXNoYXJlZC11c2VhMS0wMi5oeWdyYXBoLmNvbS8iLCJzdWIiOiI1NTMzZmNkNC1hZWRhLTQ3MzctYmQ5MS03ZGYxNDAwYjA4NWMiLCJqdGkiOiJjbHhsaW5zMmQwbXR1MDdsZmZ3bWJja294In0.j0FMGtOTJIW6VsuehhVFQTYkwhF1sokr9uzDDG-ZF5qhP54F06xKyomenf2tcHT5pZdbZcsr6o2pYVhAtO_oKN__SqvI97MhB-2r0Du46vwA-zMQjkDTMjuQZG9gMkfaLJ2uzFZVW9mPxI-5GesII3BLnYWAasoUTX2Cza2FsiJ4Ox92h0P35OVxgPZN0QfW3IOp-hJp1_DL8wOSXpDBZHW1nmWOkxMMqm4-4t_hqKZ1dip7-Chj6KEYS0AxGyFbnEZQBcFmfwm4AW51MDjh3GX2rXTCzoiZUQBHlPt-dHHsRl_5gJP5lHHqn3gVzhh-cFT8mvBVGneRDpza9mF4e2XcRZdMEz5WCycaR40TIsc_jJXmE0xI8XlG6SG0f1nU6uIrm_nnIT-Mn9XOpUwrIak01RutXl2_6P2RfoOK9alE2lD2A42bLdGOl4Zyliq4bMx6dQPGIuOlat5Fl1C0_aD0lKbC780Wl-K_asUAA5H11syX39DFvwrvNEAX3ywT8IRiAO7HhcE5FcJeWIaIMgD8RYmiCqZixag6BVHqrqH60R44J_iLP_Zol2wpzJ79sj_nZkrdG-Z66lntIh3avCQpPnU9GjvCuKTfMseKIYNac7m7VJp8QUIvWRAI3t5lU2XtuWWWM6BMgVGmGAMuIJ1vZcYUXm8VpDu2m3eHyfA`,
  };
  const result = await request(MASTER_URL, mutationQuery, {}, headers);
  return result;
};
