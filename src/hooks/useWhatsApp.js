import { useRouter } from "next/router";
import { getWhatsappByRoute } from "../helpers/getWhatsappByRoute";

export const useWhatsApp = () => {
  const { pathname } = useRouter();
  const whatsapp = getWhatsappByRoute(pathname);

  return whatsapp;
}