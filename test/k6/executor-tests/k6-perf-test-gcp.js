import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('http://20.229.146.182:8081/api/auctions/1');
  check(res, { 'status was 200': (r) => r.status == 200 });
  check(res, {
    'verify partial text': (r) =>
      r.body.includes('id'),
  });
}
