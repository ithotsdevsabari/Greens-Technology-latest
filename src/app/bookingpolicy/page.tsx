import BookingPBanner from "@/components/BookingPolicy/BookingPBanner";
import BookingPolicyContent from "@/components/BookingPolicy/BookingPolicyContent";
import GreensFooter from "@/components/Layouts/GreensFooter";
import Navbar from "@/components/Layouts/Navbar";

export default function BookingPolicy() {
  return (
    <>
      <Navbar />

      <BookingPBanner
        pageTitle="Booking Policy"
        BGImage="/images/Booking_policy.jpg"
      />

      <BookingPolicyContent />
      <GreensFooter />
    </>
  );
}
