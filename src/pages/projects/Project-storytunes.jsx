import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import FireSpinner from '../../assets/gifs/fire-red.gif';
import Header from '../../components/projects/Header';

import MainImage425 from '../../assets/imgs/projects/storytunes/main/main_425.png';
import MainImage1045 from '../../assets/imgs/projects/storytunes/main/main_1045.png';
import MainImage1453 from '../../assets/imgs/projects/storytunes/main/main_1453.png';
import MainImage1699 from '../../assets/imgs/projects/storytunes/main/main_1699.png';
import MainImage2000 from '../../assets/imgs/projects/storytunes/main/main_2000.png';

import AuthImg_1_190 from '../../assets/imgs/projects/storytunes/auth/auth1-190.png';
import AuthImg_1_467 from '../../assets/imgs/projects/storytunes/auth/auth1-467.png';
import AuthImg_1_563 from '../../assets/imgs/projects/storytunes/auth/auth1-563.png';
import AuthImg_2_190 from '../../assets/imgs/projects/storytunes/auth/auth2-190.png';
import AuthImg_2_459 from '../../assets/imgs/projects/storytunes/auth/auth2-459.png';
import AuthImg_2_563 from '../../assets/imgs/projects/storytunes/auth/auth2-563.png';
import AuthImg_3_190 from '../../assets/imgs/projects/storytunes/auth/auth3-190.png';
import AuthImg_3_469 from '../../assets/imgs/projects/storytunes/auth/auth3-469.png';
import AuthImg_3_563 from '../../assets/imgs/projects/storytunes/auth/auth3-563.png';
import AuthImg_4_190 from '../../assets/imgs/projects/storytunes/auth/auth4-190.png';
import AuthImg_4_414 from '../../assets/imgs/projects/storytunes/auth/auth4-414.png';
import AuthImg_4_563 from '../../assets/imgs/projects/storytunes/auth/auth4-563.png';

import St_1_190 from '../../assets/imgs/projects/storytunes/student/st1-190.png';
import St_1_425 from '../../assets/imgs/projects/storytunes/student/st1-425.png';
import St_1_563 from '../../assets/imgs/projects/storytunes/student/st1-563.png';
import St_2_190 from '../../assets/imgs/projects/storytunes/student/st2-190.png';
import St_2_382 from '../../assets/imgs/projects/storytunes/student/st2-382.png';
import St_2_563 from '../../assets/imgs/projects/storytunes/student/st2-563.png';
import St_3_190 from '../../assets/imgs/projects/storytunes/student/st3-190.png';
import St_3_390 from '../../assets/imgs/projects/storytunes/student/st3-390.png';
import St_3_563 from '../../assets/imgs/projects/storytunes/student/st3-563.png';
import St_4_190 from '../../assets/imgs/projects/storytunes/student/st4-190.png';
import St_4_428 from '../../assets/imgs/projects/storytunes/student/st4-428.png';
import St_4_563 from '../../assets/imgs/projects/storytunes/student/st4-563.png';

import Work_1_190 from '../../assets/imgs/projects/storytunes/student/work1-190.png';
import Work_1_458 from '../../assets/imgs/projects/storytunes/student/work1-458.png';
import Work_1_563 from '../../assets/imgs/projects/storytunes/student/work1-563.png';
import Work_2_190 from '../../assets/imgs/projects/storytunes/student/work2-190.png';
import Work_2_411 from '../../assets/imgs/projects/storytunes/student/work2-411.png';
import Work_2_563 from '../../assets/imgs/projects/storytunes/student/work2-563.png';
import Work_3_190 from '../../assets/imgs/projects/storytunes/student/work3-190.png';
import Work_3_409 from '../../assets/imgs/projects/storytunes/student/work3-409.png';
import Work_3_563 from '../../assets/imgs/projects/storytunes/student/work3-563.png';
import Work_4_190 from '../../assets/imgs/projects/storytunes/student/work4-190.png';
import Work_4_493 from '../../assets/imgs/projects/storytunes/student/work4-493.png';
import Work_4_563 from '../../assets/imgs/projects/storytunes/student/work4-563.png';

import Admin_1_190 from '../../assets/imgs/projects/storytunes/admin/admin1-190.png';
import Admin_1_451 from '../../assets/imgs/projects/storytunes/admin/admin1-451.png';
import Admin_1_563 from '../../assets/imgs/projects/storytunes/admin/admin1-563.png';
import Admin_2_190 from '../../assets/imgs/projects/storytunes/admin/admin2-190.png';
import Admin_2_478 from '../../assets/imgs/projects/storytunes/admin/admin2-478.png';
import Admin_2_563 from '../../assets/imgs/projects/storytunes/admin/admin2-563.png';
import Admin_3_190 from '../../assets/imgs/projects/storytunes/admin/admin3-190.png';
import Admin_3_372 from '../../assets/imgs/projects/storytunes/admin/admin3-372.png';
import Admin_3_563 from '../../assets/imgs/projects/storytunes/admin/admin3-563.png';
import Admin_4_190 from '../../assets/imgs/projects/storytunes/admin/admin4-190.png';
import Admin_4_428 from '../../assets/imgs/projects/storytunes/admin/admin4-428.png';
import Admin_4_563 from '../../assets/imgs/projects/storytunes/admin/admin4-563.png';

import ClassReg from '../../assets/imgs/projects/storytunes/video/class_registration.webm';
import DebutList from '../../assets/imgs/projects/storytunes/video/debut_list.webm';

import {
	WrapperStyles,
	ContainerStyles,
	TopSectionStyles,
	HeaderSectionStyles,
	SectionStyles,
	SubSectionStyles,
	TitleStyles,
	DescStyles,
	ImgListStyles,
	VideoListStyles,
} from './StorytunesStyles';

import { LoadingStyles, SpinnerStyles } from '../../styles';

function ProjectStorytunes() {
	const [loading, setLoading] = useState(true);

	const handleLoad = () => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	return (
		<>
			<Header />
			<LoadingStyles loadingState={loading}>
				<SpinnerStyles src={FireSpinner} />
			</LoadingStyles>
			<WrapperStyles>
				<ContainerStyles>
					<HeaderSectionStyles>
						{/* left */}
						<div id="title_left">
							<h1>Storytunes</h1>
							<h2>UX / UI, Development. 2022</h2>
						</div>

						{/* right */}
						<div id="title_right">
							<img
								sizes="(max-width: 2000px) 100vw, 2000px"
								srcSet={`${MainImage425} 425w, ${MainImage1045} 1045w, ${MainImage1453} 1453w, ${MainImage1699} 1699w, ${MainImage2000} 2000w`}
								src={MainImage1045}
								onLoad={handleLoad}
								alt=""
							/>
						</div>
					</HeaderSectionStyles>

					<TopSectionStyles>
						{/* header */}
						<h2>Overview</h2>
						<div>
							<h3>
								<span>이 프로젝트를 선택한 이유</span>
							</h3>
							<ol>
								<li>
									1. 현재 서비스 중인 웹 애플리케이션 개발 프로젝트에서 공동
									기획, 디자인 및 퍼블리싱을 담당했습니다 &#40;2021&#41;.
								</li>
								<li>
									2. 개발 이외의 프로덕트 제작에 직&#183;간접적으로 참여했기에
									이를 바탕으로 디자인, 개발 그리고 배포의 풀사이클 개발 구현과
									경험 목적에 적합한 프로젝트라고 판단했습니다.
								</li>
								<li>
									3. 다수의 페이지 및 컴포넌트 &#40;웹 인증, 강의 개설 및 신청,
									글 연재 게시판, 유저 및 관리자 대쉬보드 등&#41;를 포함한
									프론트엔드 학습 중심의 개발과 배포를 목적으로 이 프로젝트를
									선택했습니다.{' '}
								</li>
							</ol>
						</div>
						<div>
							<h3>
								<span>이 프로젝트에서 사용한 기술 스택</span>
							</h3>
							<ol>
								<li>
									프론트엔드 개발 입문 가이드와 온라인 강의에서 공통으로
									추천하는 기술들을 사용했습니다.
								</li>
								<li>
									1. 회원 관련 웹 인증은 Firebase Authentication을 사용했습니다.
								</li>
								<li>
									2. React를 사용해 싱글 페이지 어플리케이션을 제작했습니다.
									Context API로 전역 상태 관리를 했습니다. 스타일링은 styled
									components + tailwindCSS을 사용했습니다.
								</li>
								<li>
									3. Express로 RESTful API를 만들고 MonoDB 데이터베이스를
									사용했습니다. Heroku로 풀스택 배포를 했습니다.
								</li>
							</ol>
						</div>
						<div>
							<h3>
								<span>이 프로젝트에서 경험한 어려움</span>
							</h3>
							<ol>
								<li>
									1. 방대한 페이지(25+)와 컴포넌트(40+) 그리고 반응형 웹
									스타일링에 예상보다 많은 시간을 사용했고 라이브러리를
									사용하면서 에러 핸들링에서 어려움을 겪었습니다.
								</li>
								<li>
									2. 복잡한 백엔드 라우팅 핸들링에서 어려움을 겪었습니다. 특히
									서버 사이드에서 RESTful API 사용 시 올바른 End Points 설정 및
									다양한 요청들의 처리에 어려움을 경험했습니다.{' '}
								</li>
								<li>
									3. 풀스택 배포에 어려움을 겪었고 배포 후 웹 테스트(Google
									Lighthouse)에서 웹 퍼포먼스, 웹 접근성에 대해 부족한 점수를
									받았고 향상 시키는 데 어려움을 겪었습니다.
								</li>
							</ol>
						</div>
						<div>
							<h3>
								<span>이 프로젝트를 통해 배운 것들</span>
							</h3>
							<ol>
								<li>
									1. 디자인, 개발 그리고 배포까지 풀 사이클 웹 애플리케이션
									제작을 경험했습니다.
								</li>
								<li>
									2. 새로운 기술들을 학습했습니다: Firebase, twin
									macro&#40;styled components + tailwindCSS&#41;
								</li>
								<li>
									3. 웹 접근성, 웹 성능과 같은 웹 개발에서 고려 해야 할 환경에
									대해 다각도로 접근하여 해결하려는 태도를 배웠습니다.{' '}
								</li>
							</ol>
						</div>
						<div>
							<h3>
								<span>만약 다시 만든다면</span>
							</h3>
							<ol>
								<li>
									1. Next.js의 SSR 전략을 사용하겠습니다. &#40;SEO &#38; Image
									optimazation&#41;
								</li>
								<li>
									2. 더 효율적인 상태 관리를 위해 Redux와 같은 전문 상태 관리
									라이브러리를 사용하겠습니다.
								</li>
								<li>
									3. 타입스크립트 사용 및 학습을 위한 점진적 전환을 계획
									중입니다. Git을 더 적극적이고 명확하게 사용하겠습니다.
								</li>
							</ol>
						</div>
					</TopSectionStyles>

					<SectionStyles>
						{/* header */}
						<TitleStyles>
							<h2>Authentication</h2>
						</TitleStyles>
						<ImgListStyles>
							<li>
								<LazyLoadImage
									src={AuthImg_1_467}
									alt=""
									sizes="(max-width: 563px) 100vw, 563px"
									srcSet={`${AuthImg_1_190} 190w, ${AuthImg_1_467} 467w, ${AuthImg_1_563} 563w`}
								/>
							</li>
							<li>
								<LazyLoadImage
									src={AuthImg_2_459}
									alt=""
									sizes="(max-width: 563px) 100vw, 563px"
									srcSet={`${AuthImg_2_190} 190w, ${AuthImg_2_459} 459w, ${AuthImg_2_563} 563w`}
								/>
							</li>{' '}
							<li>
								<LazyLoadImage
									src={AuthImg_3_469}
									alt=""
									sizes="(max-width: 563px) 100vw, 563px"
									srcSet={`${AuthImg_3_190} 190w, ${AuthImg_3_469} 469w, ${AuthImg_3_563} 563w`}
								/>
							</li>
							<li>
								<LazyLoadImage
									src={AuthImg_4_414}
									alt=""
									sizes="(max-width: 563px) 100vw, 563px"
									srcSet={`${AuthImg_4_190} 190w, ${AuthImg_4_414} 414w, ${AuthImg_4_563} 563w`}
								/>
							</li>
						</ImgListStyles>
						<DescStyles>
							<div>
								<h3>Approach</h3>
								<p>
									손쉬운 사용자 관리와 제휴 ID 공급업체 사용자 인증을 간편하게
									구현하고 사용자 정보를 안전하게 저장하기 위해{' '}
									<span>Firebase 인증 SDK</span>를 사용했습니다.
								</p>
							</div>
							<div>
								<h3>Challenges</h3>
								<p>
									스트링으로 구성 된 Firebase 사용자 ID가 MongoDB의 OjectId에
									유효하지 않아 Firebase 사용자 정보와 MongoDB의 데이터 베이스를
									연동하면서 어려움을 겪었습니다. 그래서 Firebase 사용자 생성 시
									함수를 통해 임의의 OjbectId 만들어 Firebase Store에 저장해서
									사용했습니다.
								</p>
							</div>
							<div>
								<h3>Learning</h3>
								<p>
									클라이언트와 서버 사이드에서 Firebase 인증을 다루는 법을
									배웠고 MongoDB와의 연동해서 데이터를 요청하고 사용하는 방식을
									학습 했습니다.{' '}
								</p>
							</div>
						</DescStyles>
					</SectionStyles>

					<SectionStyles>
						{/* header */}
						<TitleStyles>
							<h2>Student Dashboard</h2>
						</TitleStyles>
						<SubSectionStyles>
							<h3>강의 게시판</h3>
							<ImgListStyles>
								<li>
									<LazyLoadImage
										src={St_1_425}
										alt=""
										sizes="(max-width: 563px) 100vw, 563px"
										srcSet={`${St_1_190} 190w, ${St_1_425} 425w, ${St_1_563} 563w`}
									/>
								</li>
								<li>
									<LazyLoadImage
										src={St_2_382}
										alt=""
										sizes="(max-width: 563px) 100vw, 563px"
										srcSet={`${St_2_190} 190w, ${St_2_382} 382w, ${St_2_563} 563w`}
									/>
								</li>
								<li>
									<LazyLoadImage
										src={St_3_390}
										alt=""
										sizes="(max-width: 563px) 100vw, 563px"
										srcSet={`${St_3_190} 190w, ${St_3_390} 390w, ${St_3_563} 563w`}
									/>
								</li>

								<li>
									<LazyLoadImage
										src={St_4_428}
										alt=""
										sizes="(max-width: 563px) 100vw, 563px"
										srcSet={`${St_4_190} 190w, ${St_4_428} 428w, ${St_4_563} 563w`}
									/>
								</li>
							</ImgListStyles>
						</SubSectionStyles>

						<SubSectionStyles>
							<h3>연재 게시판</h3>
							<ImgListStyles>
								<li>
									<LazyLoadImage
										src={Work_1_458}
										alt=""
										sizes="(max-width: 563px) 100vw, 563px"
										srcSet={`${Work_1_190} 190w, ${Work_1_458} 458w, ${Work_1_563} 563w`}
									/>
								</li>

								<li>
									<LazyLoadImage
										src={Work_2_411}
										alt=""
										sizes="(max-width: 563px) 100vw, 563px"
										srcSet={`${Work_2_190} 190w, ${Work_2_411} 411w, ${Work_2_563} 563w`}
									/>
								</li>

								<li>
									<LazyLoadImage
										src={Work_3_409}
										alt=""
										sizes="(max-width: 563px) 100vw, 563px"
										srcSet={`${Work_3_190} 190w, ${Work_3_409} 409w, ${Work_3_563} 563w`}
									/>
								</li>

								<li>
									<LazyLoadImage
										src={Work_4_493}
										alt=""
										sizes="(max-width: 563px) 100vw, 563px"
										srcSet={`${Work_4_190} 190w, ${Work_4_493} 493w, ${Work_4_563} 563w`}
									/>
								</li>
							</ImgListStyles>
						</SubSectionStyles>

						<DescStyles>
							<div>
								<h3>Approach</h3>
								<p>
									수강생 대쉬보드입니다. 출석 체크 및 과제 제출 현황을 포함한
									강의실, 연재 게시판 그리고 사용자 정보 변경 페이지로 구성
									됩니다. 프론트엔드에서는 수업 관련 context API와 연재 관련
									context API를 사용해서 상태 관리를 했습니다. 사용자 정보
									변경은 Firebase 인증 SDK를 사용했습니다. 실시간 강의실, 채팅
									기능 그리고 과제 제출 피드백 기능은 현재 개발 중입니다.
								</p>
							</div>
							<div>
								<h3>Challenges</h3>
								<p>
									데이터 베이스&#40;사용자 인증, 강의 상품, 학생 정보, 강사 정보
									등&#41;을 한번에 요청해서 정보를 표시하고 변경 사항을 업데이트
									하는 데 예상보다 시간이 더 오래 걸렸습니다. 비동기 요청과
									Context API의 상태 관리와 백엔드 데이터베이스의 필드 수정으로
									시간을 줄였습니다.
								</p>
							</div>
							<div>
								<h3>Learning</h3>
								<p>MongoDB - Documents 참조</p>
							</div>
						</DescStyles>
					</SectionStyles>

					<SectionStyles>
						{/* header */}
						<TitleStyles>
							<h2>Admin Dashboard</h2>
						</TitleStyles>
						<ImgListStyles>
							<li>
								<LazyLoadImage
									src={Admin_1_451}
									alt=""
									sizes="(max-width: 563px) 100vw, 563px"
									srcSet={`${Admin_1_190} 190w, ${Admin_1_451} 451w, ${Admin_1_563} 563w`}
								/>
							</li>

							<li>
								<LazyLoadImage
									src={Admin_2_478}
									alt=""
									sizes="(max-width: 563px) 100vw, 563px"
									srcSet={`${Admin_2_190} 190w, ${Admin_2_478} 478w, ${Admin_2_563} 563w`}
								/>
							</li>
							<li>
								<LazyLoadImage
									src={Admin_3_372}
									alt=""
									sizes="(max-width: 563px) 100vw, 563px"
									srcSet={`${Admin_3_190} 190w, ${Admin_3_372} 372w, ${Admin_3_563} 563w`}
								/>
							</li>

							<li>
								<LazyLoadImage
									src={Admin_4_428}
									alt=""
									sizes="(max-width: 563px) 100vw, 563px"
									srcSet={`${Admin_4_190} 190w, ${Admin_4_428} 428w, ${Admin_4_563} 563w`}
								/>
							</li>
						</ImgListStyles>

						<DescStyles>
							<div>
								<h3>Approach</h3>
								<p>
									관리자 및 강사 대쉬보드 입니다. 강의 개설, 강의 진행 그리고
									학생 관리&#40;개발 중&#41; 페이지로 구성 됩니다.
									React-select와 Date-picker 리엑트 제어 컴포넌트 라이브러리를
									사용해 강의 생성 Form을 제작했습니다.
								</p>
							</div>
							<div>
								<h3>Challenges</h3>
								<p>
									2개 이상의 컴포넌트 라이브러리를 사용해 다중 입력으로 Form
									제어 컴포넌트를 만들 때 어려움을 겪었습니다. 특히 Date 상태
									값을 전달하고 수정하는 과정에서 타입 오류와 같은 시행착오를
									겪었습니다.
								</p>
							</div>
							<div>
								<h3>Learning</h3>
								<p>제어 컴포넌트 라이브러리 사용법</p>
							</div>
						</DescStyles>
					</SectionStyles>

					<SectionStyles id="videoSection">
						{/* header */}
						<TitleStyles>
							<h2>Key Pages &amp; Components</h2>
						</TitleStyles>
						<VideoListStyles>
							<li>
								<video autoPlay loop>
									<source src={ClassReg} type="video/webm" />
									{/* <source src="/media/cc0-videos/flower.mp4" type="video/mp4" /> */}
									Sorry, your browser doesn't support embedded videos.
								</video>
							</li>
							<li>
								<video autoPlay loop>
									<source src={DebutList} type="video/webm" />
									{/* <source src="/media/cc0-videos/flower.mp4" type="video/mp4" /> */}
									Sorry, your browser doesn't support embedded videos.
								</video>
							</li>
						</VideoListStyles>
					</SectionStyles>
				</ContainerStyles>
			</WrapperStyles>
		</>
	);
}

export default ProjectStorytunes;
