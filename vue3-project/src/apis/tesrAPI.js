import httpInstace from "@/utils/http";

export function getCategory() {
  return httpInstace({
    url: 'home/category/head'
  })
}